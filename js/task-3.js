class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  value = '';

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value = this.value.concat(str);
  }

  padStart(str) {
    this.value = [str, this.value].join('');
  }

  padBoth(str) {
    this.value = [str, this.value, str].join('');
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
