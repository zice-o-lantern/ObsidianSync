compile = (input, context) => {
  // const START_TAGS_REGEX = /%% {/gm;
  // const END_TAGS_REGEX = /} %%/gm;
  if (context.kind === "Scene") {
    return input.map((sceneInput) => {
      return {
        ...sceneInput,
        contents: sceneInput.contents.replace(/%% {w} %%/gm, () => "{w}"),
      };
    });
  } else {
    return {
      ...input,
      contents: input.contents.replace(/%%\s{/g, "{"),
    };
  }
}

module.exports = {
  // object that describes the step and its configuration
  description: {
    // the name of your step
    name: "Replace Tags",

    // short description of what it does
    description: "Replace Tags like {w}",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
  },
  compile: compile,
};