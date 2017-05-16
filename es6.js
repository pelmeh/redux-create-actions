function createActions (prefix, constaints, pageName, symbol = '_') {
  const def = constaint => typeof constaint === 'object' ? [constaint[0], prefix] : [prefix, constaint]
  const actions = constaints.reduce((total, constaint) =>
    Object.defineProperty(total, constaint, {
      value: def(constaint).join(symbol)
    }), {})
  return Object.defineProperty(actions, 'pageName', { value: (pageName || prefix) })
}
