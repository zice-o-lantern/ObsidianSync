// See docs for `input` and `context` types and expected return type.
async function compile(input, context) {
  // const text = context.optionValues["to-add"];
  // const append = context.optionValues["append"];

  if (context.kind != "Manuscript") {
    throw new Error("Cannot Use it in non-manuscript mode");
  } else {
    // context.
    sh('py "D:\shin\Documents\Renpy\Exhibitionist Priest\renpy_parser\main.py" "D:\shin\Documents\ObsidianSync\Exhibitionist Priest\01 - Zettelkastem\Le Plaisir de mon Château de polystyrène\EN\renpy.md" "D:\shin\Documents\Renpy\Exhibitionist Priest\game\story\styrofoam_castle.rpy"');
    // return {
    //   ...input,
    //   contents: append ? input.contents + text : text + input.contents
    // };
  }
}

const childProcess = require('child_process');

async function sh(cmd_to_execute) {
    return new Promise(function (resolve, reject) {
        childProcess.exec(cmd_to_execute, (err, stdout, stderr) => {
            if (err) {
                reject(err);
            } else {
                resolve({stdout, stderr});
            }
        });
    });
}

module.exports = {
  description: {
    name: "Example User Script",
    description: "Appends or prepends some test text.",
    availableKinds: ["Manuscript"],
    options: [
      {
        id: "to-add",
        name: "Text to append or prepend",
        description: "Will be appended or prepended to the scene or manuscript, to demonstrate user steps.",
        type: "Text",
        default: "\n\nText added in user script."
      },
      {
        id: "append",
        name: "Append",
        description: "If true, prepend the above text value. If false, prepend it.",
        type: "Boolean",
        default: true
      }
    ]
  },
  compile: compile
};
