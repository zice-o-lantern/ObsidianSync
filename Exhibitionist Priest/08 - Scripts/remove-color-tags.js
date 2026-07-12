compile = (input, context) => {
  const COLORTAGS_REGEX = /<span(.*?)>/g;
  const END_COLORTAGS_REGEX = /<\/span>/g;
  if (context.kind === "Scene") {
    return input.map((sceneInput) => {
      let content = sceneInput.contents.replace(COLORTAGS_REGEX, () => "");
      content = content.replace(END_COLORTAGS_REGEX, () => "");
      return {
        ...sceneInput,
        contents: content
      };
    });
  } else {
    let content = input.contents.replace(COLORTAGS_REGEX, () => "");
    content = content.replace(END_COLORTAGS_REGEX, () => "");
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
    name: "Remove Color Tags",

    // short description of what it does
    description: "Remove color tags of the text (<span>)",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
  },
  compile: compile,
};