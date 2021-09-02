// command system 😎

// Let <name> be <number>
class LetCommand {
  constructor(name, num) {
    this.name = name;
    this.num = num;
    this.type = "let";
  }
}

// Output <name>
class OutputCommand {
  constructor(name) {
    this.name = name;
    this.type = "output";
  }
}

class Rules {
  constructor() {
    this.rules = [];
    this.values = {}; // name: number
  }
  
  addRule(rule) {
    this.rules.push(rule);
  }

  // names.simon
  // names[name]
  apply() {
    for (let rule of this.rules) {
      if (rule.type === "let") {
        this.values[rule.name] = rule.num.evaluate(this.values);
      } else if (rule.type === "output") {
        console.log(this.values)
        return this.values[rule.name];
      }
    }
  }
}

// new Num("number", 7) oh I see!
// new Num("square", "x")
// new Num("multiply", "x", "y")
class Num {
  constructor(type, ...args) {
    this.type = type;
    this.args = args;
  }

  evaluate(values) {
    if (this.type === "num") {
      return this.args[0];
    } else if (this.type === "add") {
      return values[this.args[0]] + values[this.args[1]];
    } else if (this.type === "subtract") {
      return values[this.args[0]] - values[this.args[1]];
    } else if (this.type === "multiply") {
      return values[this.args[0]] * values[this.args[1]];
    } else if (this.type === "divide") {
      return values[this.args[0]] / values[this.args[1]];
    } else if (this.type === "modulo") {
      return values[this.args[0]] % values[this.args[1]];
    } else if (this.type === "power") {
      return values[this.args[0]] ** values[this.args[1]];
    } else if (this.type === "sqrt") {
      return sqrt(values[this.args[0]]);
    } else if (this.type === "root") {
      return values[this.args[0]] ** (1/values[this.args[1]]);
    } else if (this.type === "sin") {
      return sin(values[this.args[0]]);
    } else if (this.type === "cos") {
      return cos(values[this.args[0]]);
    } else if (this.type === "tan") {
      return tan(values[this.args[0]]);
    } else if (this.type === "if") {
      return values[this.args[0]] !== 0 ? values[this.args[1]] : values[this.args[2]];
    } else if (this.type === "abs") {
      return abs(values[this.args[0]]);
    } else if (this.type === "floor") {
      return floor(values[this.args[0]]);
    } else if (this.type === "ceil") {
      return ceil(values[this.args[0]]);
    } else if (this.type === "factorial") {
      return factorial(values[this.args[0]]);
    } else if (this.type === "log") {
      return Math.log10(values[this.args[0]]);
    } else if (this.type === "ln") {
      return Math.log(values[this.args[0]]);
    } else if (this.type === "random") {
      return random(1);
    } else if (this.type === "pi") {
      return PI;
    } else if (this.type === "e") {
      return exp();
    } else if (this.type === "prev") {
      return prevOutput;
    } else {
      console.log('¯\\_(ツ)_/¯')
    }
  }
}

function factorial(num) {
  if (num === 0) return 1;
  else           return num * factorial(num-1);
}