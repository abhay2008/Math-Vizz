let rules;
let car;
let carVel;
let vizzing;
let prevOutput = 0;
let trail = [];

function setup() {
  createCanvas(windowWidth-40, windowHeight-200);
  rules = new Rules();
  const letBtn = createButton("Add let command");
  const letName = createInput();
  letName.attribute("placeholder", "enter name here");
  const letType = createSelect();
  letType.option("num");
  letType.option("add");
  letType.option("subtract");
  letType.option("multiply");
  letType.option("divide");
  letType.option("modulo");
  letType.option("power");
  letType.option("sqrt");
  letType.option("root");
  letType.option("sin");
  letType.option("cos");
  letType.option("tan");
  letType.option("if");
  letType.option("abs");
  letType.option("floor");
  letType.option("ceil");
  letType.option("factorial");
  letType.option("log");
  letType.option("ln");
  letType.option("random");
  letType.option("pi");
  letType.option("e");
  letType.option("prev");
  const letArgs = createInput();
  letArgs.attribute("placeholder", "enter arguments here");
  createElement("br");
  const outBtn = createButton("Add output command");
  const outName = createInput();
  outName.attribute("placeholder", "enter value to output here");
  const initialOut = createInput();
  initialOut.attribute("placeholder", "enter initial output here");
  const rulesDOM = createElement("ul");
  letBtn.mousePressed(() => {
    rules.addRule(new LetCommand(letName.value(), new Num(letType.value(), ...(letType.value() === "num" ? [Number(letArgs.value())] : letArgs.value().split(" ")))));
    createElement("li").html(`Let ${letName.value()} be ${letType.value()} ${letArgs.value()}`).parent(rulesDOM);
  });
  outBtn.mousePressed(() => {
    rules.addRule(new OutputCommand(outName.value()));
    createElement("li").html(`Output ${outName.value()}`).parent(rulesDOM);
  });
  const runBtn = createButton("Run");
  const vizBtn = createButton("Visualize");
  const output = createSpan();
  runBtn.mousePressed(() => output.html(rules.apply()));
  vizBtn.mousePressed(() => {
    vizzing = !vizzing;
    if (vizzing) {
      prevOutput = Number(initialOut.value());
      car = createVector(width/2, height/2);
      carVel = createVector(3, 0);
      trail.splice(0);
    }
  });


  car = createVector(width/2, height/2);
  carVel = createVector(3, 0);
}

function draw() {
  clear();
  background(11, 11, 11, 150);
  strokeWeight(3);
  stroke(255);
  noFill();
  beginShape();
  for (const t of trail) {
    vertex(t.x, t.y);
  }
  endShape();
  noStroke();
  fill('#4c6ef5');
  circle(car.x, car.y, 35);
  if (vizzing) {
    const result = rules.apply();
    carVel.rotate(radians(result));
    car.add(carVel);
    trail.push(car.copy());
    prevOutput = result;
  }
}