import { pipe, memoize } from '../../utils/utils';

const selectDirectory = state => state.directory;

export const selectDirectorySections = pipe(
  selectDirectory,
  memoize(directory => directory.sections)
);