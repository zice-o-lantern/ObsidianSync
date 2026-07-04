compile = (input, context) => {
  const EN_REGEX = /%% EN %%(.*?)\n/gm;
  if (context.kind === "Scene") {
    return input.map((sceneInput) => {
      return {
        ...sceneInput,
        contents: sceneInput.contents.replace(EN_REGEX, () => "")
      };
    });
  } else {
    return {
      ...input,
      contents: input.contents.replace(EN_REGEX, () => "")
    };
  }
}

module.exports = {
  // object that describes the step and its configuration
  description: {
    // the name of your step
    name: "Remove The English Localisation",

    // short description of what it does
    description: "Remove the English Localisation with %% EN %%",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
  },
  compile: compile,
};