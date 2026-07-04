compile = (input, context) => {
  const BREAKLINE_REGEX = /%% bl %%/gm;
  if (context.kind === "Scene") {
    return input.map((sceneInput) => {
      return {
        ...sceneInput,
        contents: sceneInput.contents.replace(BREAKLINE_REGEX, () => "\n")
      };
    });
  } else {
    return {
      ...input,
      contents: input.contents.replace(BREAKLINE_REGEX, () => "\n")
    };
  }
}

module.exports = {
  // object that describes the step and its configuration
  description: {
    // the name of your step
    name: "Add Break Lines",

    // short description of what it does
    description: "Add break lines for the renpy export",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
  },
  compile: compile,
};