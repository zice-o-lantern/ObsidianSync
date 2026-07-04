
compile = (input, context) => {
  /**
    Function that is executed during compilation. It may be `async`.
    Errors encountered during execution should be thrown and will
    be handled by Longform.
    @param input If the step is of kind Scene or Join (see context),
    this will be *an array* containing elements of type:
      {
        path: string; // path to scene
        name: string; // file name of scene
        contents: string; // text contents of scene
        metadata: CachedMetadata; // Obsidian metadata of scene
        indentationLevel?: number; // The indent level (starting at zero) of the scene
      }
    where each element corresponds to a scene (and thus the step has access to all scenes at once in `input`).
    If the step is of kind Manuscript (see context), this will be of type:
      {
        // text contents of manuscript
        contents: string;
      }
    @param context The execution context of the step, including the step
    kind and option values:
      {
        kind: string; // "Scene" | "Join" | "Manuscript"
        optionValues: { [id: string]: unknown } // Map of option IDs to values
        projectPath: string; // path in vault to compiling project
        draft: Draft; // The Draft type describing your project
        app: App; // Obsidian app
      }
    @note For an example of using `context` to determine the shape of `input`, see
    https://github.com/kevboh/longform/blob/main/src/compile/steps/strip-frontmatter.ts
    @returns If of kind "Scene" or "Manuscript", the same shape as `input`
    with the appropriate changes made to `contents`. If of kind "Join",
    the same shape as a "Manuscript" step input.
  */
  return;
}

module.exports = {
  // object that describes the step and its configuration
  description: {
    // the name of your step
    name: "My Step",

    // short description of what it does
    description: "Does something cool",

    // array. valid options are "Scene", "Manuscript", "Join". "Join" must be the only member if present.
    availableKinds: ["Scene", "Manuscript"],

    // array of step options, or an empty array if step has no options
    options: [
      {
        // string ID you can use to get the option's value during compile
        id: "my-text-option",

        // name of this option for display
        name: "Customizes something in my step",

        // description of what the option does
        description: "Longer description of what exactly this option does",

        // enum, either "Text" or "Boolean"
        type: "Text",

        // the option's default value. string if "Text", boolean if "Boolean"
        default: "Hello world!",
      },

      // a boolean option follows as another example
      {
        id: "my-boolean-option",
        name: "Do Thing?",
        description: "If checked, do some extra thing.",
        type: "Boolean",
        default: true,
      },
    ],
  },
  compile: compile,
};