# ippo

A command-line tool to quickly set up a development environment with your chosen framework, language, and stylesheet.

_Every time, setting up ESLint or Stylelint configuration files was a hassle, so I created this._

## Installation

### Global Installation

You can install `ippo` globally using npm:

```bash
npm i -g ippo
```

Or using pnpm:

```bash
pnpm i -g ippo
```

After global installation, you can run `ippo` directly from the command line:

```bash
ippo
```

### Using npx/pnpx

Alternatively, you can use `npx` or `pnpx` to run `ippo` without installing it globally:

With npm:

```bash
npx ippo
```

With pnpm:

```bash
pnpx ippo
```

## Usage

Simply run `ippo` and answer the prompts. Your project will be set up in no time!

### Currently Supported Options

1. **Framework**: Vanilla
2. **Language**: TypeScript
3. **Stylesheet language**: SCSS

_Currently, only a single configuration is supported, but more options will be added in the future._

### Planned Features

- [ ] Support for additional frameworks (React, Vue)
- [ ] Support for JavaScript
- [ ] Support for CSS and the option to exclude a stylesheet
- [ ] Ability to specify options via command-line arguments using `yargs`

Stay tuned for updates as we continue to expand the capabilities of `ippo`!

## License

This project is licensed under the MIT License.
