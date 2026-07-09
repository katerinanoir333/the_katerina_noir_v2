# Katerina Noir AI Agency System

This is the first practical operating system for running Katerina Noir with AI help on a ChatGPT Plus-sized setup.

## What Exists Now

Five project skills live in `.agents/skills`:

1. `katerina-agency-director`
   Chooses priorities, coordinates the other roles, and turns vague ideas into one small test.

2. `katerina-content-studio`
   Writes safe, polished marketing copy for Instagram, Tinder, website, DMs, and lead filtering.

3. `katerina-admin-desk`
   Organizes leads, follow-ups, task lists, simple CRM tables, and weekly admin.

4. `katerina-metrics-auditor`
   Reviews results and decides whether to continue, improve, pivot, or stop.

5. `katerina-web-builder`
   Designs, edits, tests, and plans the GitHub Pages website and any lightweight full-stack needs.

## Simple Rule

Do not ask the whole agency to think forever. Ask for one result.

Good prompt:

```text
Use $katerina-agency-director. I want one marketing experiment for this week that improves qualified website requests from Instagram.
```

Good prompt:

```text
Use $katerina-content-studio. Draft 3 Instagram story captions that invite people to read the House Rules before requesting access.
```

Good prompt:

```text
Use $katerina-admin-desk. Turn these messy leads into a simple follow-up table with next actions.
```

Good prompt:

```text
Use $katerina-metrics-auditor. We tried this profile text for 7 days. Here are the numbers and observations. Should we continue, improve, pivot, or stop?
```

Good prompt:

```text
Use $katerina-web-builder. Improve the mobile website funnel so visitors from Instagram understand the House Rules and request access.
```

## Weekly Loop

1. Pick one experiment.
2. Create the asset or workflow.
3. Publish, send, or update it.
4. Track one number and one quality signal.
5. Decide: continue, improve, pivot, or stop.

## Plus-Friendly Limits

Use Plus like a focused studio:

- 1 main experiment per week.
- 1-2 content batches per week.
- 1 admin reset per week.
- 1 metrics review per week.
- 1 website improvement or test per week.

Avoid running many large parallel tasks unless the work is urgent. Bigger volumes may fit better on higher tiers, but this setup is designed to create results without burning attention or usage.

## First Experiment Suggestion

Goal: increase qualified requests from Instagram/Tinder visitors.

Action:

1. Ask `katerina-content-studio` for three CTA variants pointing to the House Rules and request form.
2. Use one variant for 7 days.
3. Ask `katerina-admin-desk` to track source, request quality, and follow-up status.
4. Ask `katerina-metrics-auditor` to review after 7 days.

Done means:

- One CTA is live.
- One tracking table exists.
- Requests are tagged by source.
- A review date is set.
