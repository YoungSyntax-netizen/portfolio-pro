<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Use TanStack Start and React for this portfolio; keep the provided framework to retain hosting compatibility.
- Keep the explicitly requested scrolling portfolio at the index route, with section anchors and route-specific metadata.
- Use the shared Button component and global semantic OKLCH design tokens for all portfolio controls and styling.
- Keep public portfolio facts and project metadata in browser-safe source modules; never fabricate proficiency, completed work, or credential verification links.
- The contact form validates input and opens an email draft, rather than claiming delivery without an email service.
- Reference the uploaded résumé through its Lovable Assets pointer to keep binaries out of source control.
