export default (template, values) => (Object.entries(values).forEach(([key, value]) => template = template.replaceAll(`{{${key}}}`, value)), template)
