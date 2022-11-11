const sleep = (ms: number | undefined) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export const loadSubactegoryOptions = async (
  search: string,
  prevOptions: string | any[],
  subCategory: any[]
) => {
//   await sleep(500);

  let filteredOptions;
  if (!search) {
    filteredOptions = subCategory;
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = subCategory.filter(({ subCategoryName }) =>
      subCategoryName.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = filteredOptions.length > prevOptions.length + 10;
  const slicedOptions = filteredOptions.slice(
    prevOptions.length,
    prevOptions.length + 10
  );

  return {
    options: slicedOptions,
    hasMore,
  };
};

