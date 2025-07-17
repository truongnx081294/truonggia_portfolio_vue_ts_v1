// Enum-like constant: giúp code logic rõ ràng
export const TYPE_SKILL = Object.freeze({
  CORE_TECHNOLOGY: 1,
  FAMILIAR: 2,
});

// Options: dùng cho UI (Select, table...)
export const TYPE_SKILL_OPTIONS = [
  { value: TYPE_SKILL.CORE_TECHNOLOGY, label: 'Core Technology' },
  { value: TYPE_SKILL.FAMILIAR, label: 'Familiar' },
];
