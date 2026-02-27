# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

This is a **Workato integration project** (`Workato_Claude`). It is currently a new, unpopulated workspace. Update this file as the project takes shape.

The parent directory (`C:/GitHub_Repo/Dev/`) contains `Project_Template.md` describing the intended project structure convention used across internal tools in this environment.

## Expected Project Structure

Based on the organization-wide template, this project should follow:

```
/Workato_Claude
├── /docs          # Architecture, data models, integration notes, decisions log
├── /src
│   ├── frontend/
│   ├── backend/
│   └── shared/
├── /sql           # Stored procedures, schema updates, sync scripts
├── /test          # Test cases, mock data
├── /ops           # Deployment notes, release checklist
└── /automation    # PowerShell build/test scripts (.ps1)
```

## Development Environment

- **Platform**: Windows 11, shell is bash (use Unix paths with forward slashes)
- **Automation scripts**: PowerShell (`.ps1`) under `/automation`
- **Working directory**: `C:/GitHub_Repo/Dev/Workato_Claude/`

## Workato-Specific Notes

- Workato recipes are typically authored in the Workato web UI and exported as JSON or YAML
- When building connector or recipe code locally, store under `/src`
- Integration contracts and data mappings belong in `/docs/05_integration_notes.md`
- Update this CLAUDE.md once the tech stack (languages, frameworks, APIs) is established
