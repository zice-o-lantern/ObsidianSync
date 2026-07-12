compile = (input, context) => {
  const START_BRACKETS_REGEX = /<{/g
  const END_BRACKETS_REGEX = /}>/g
  if (context.kind === "Scene") {
    return input.map((sceneInput) => {
      let content = sceneInput.contents;
      content = content.replace(START_BRACKETS_REGEX, "{");
      content = content.replace(END_BRACKETS_REGEX, "}");
      
      return {
        contents: content
        // ...sceneInput,
        // contents: sceneInput.contents.replace(START_BRACKETS_REGEX, () => "cock"),
        // ...sceneInput,
        // contents: sceneInput.contents.replace(END_BRACKETS_REGEX, () => "cock")

      };
    });
  } else {
    let content = input.contents;
    content = content.replace(START_BRACKETS_REGEX, "{");
    content = content.replace(END_BRACKETS_REGEX, "}");
    return {
      ...input,
      contents: content
    };
  }
}

module.exports = {
  // object that describes the step and its configuration
  description: {
    // the name of your step
    name: "Replace Tags",

    // short description of what it does
    description: "Replace Tags like <>",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
  },
  compile: compile,
};