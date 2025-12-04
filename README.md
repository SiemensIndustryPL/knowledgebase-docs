# Knowledgebase Documentation

This repository contains the documentation for Siemens industry solutions, built with [DocFX](https://dotnet.github.io/docfx/).

## Documentation Sections

- **TIA Portal** - Documentation for Siemens TIA Portal automation software
- **WinCC 7.x/8.x** - Documentation for WinCC versions 7.x and 8.x
- **WinCC Unified** - Documentation for WinCC Unified platform

## Building the Documentation

### Prerequisites

- [.NET 6.0 or later](https://dotnet.microsoft.com/download)
- [DocFX](https://dotnet.github.io/docfx/)

### Installation

Install DocFX globally:

```powershell
dotnet tool install -g docfx
```

### Build

To build the documentation:

```powershell
docfx build docfx.json
```

The generated documentation will be output to the `_site/` directory.

### Preview

To build and preview the documentation locally:

```powershell
docfx --serve
```

This will start a local web server, typically at `http://localhost:8080`.

## Configuration

The documentation is configured via `docfx.json`:

- **Content**: Markdown and YAML files from the `articles/` directory
- **Resources**: Images and other assets
- **Output**: Generated documentation in `_site/`
- **Templates**: Uses default, modern, and custom Siemens templates
- **Metadata**:
  - App Title: `docfx-demo`
  - Search: Enabled
  - Logo: `images/sie-logo-white-rgb.svg`
  - Favicon: `images/favicon.ico`

## Contributing

To add or modify documentation:

1. Create or edit markdown files in the `articles/` directory
2. Update the table of contents in `toc.yml` as needed
3. Add images to `images/` or subdirectory-specific image folders
4. Build locally to verify changes: `docfx build docfx.json`
5. Review the generated documentation in `_site/`

## File Format

Documentation files should use:

- **Markdown** (`.md`) for content pages
- **YAML** (`.yml`) for table of contents and metadata

## Resources

- [DocFX Documentation](https://dotnet.github.io/docfx/)
- [Markdown Guide](https://www.markdownguide.org/)
- [YAML Documentation](https://yaml.org/)

## License

This documentation is part of the Siemens Industry PL knowledge base.

## Support

For issues or questions about the documentation, please contact the Siemens Industry documentation team.
