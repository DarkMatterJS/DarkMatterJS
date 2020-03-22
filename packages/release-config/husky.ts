export = {
  hooks: {
    // 'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
    'pre-commit': 'yarn pre-commit',
    'pre-push': 'yarn pre-push',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
  },
}
