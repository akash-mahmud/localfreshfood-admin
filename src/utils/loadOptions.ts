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

export const loadctegoryOptions = async (
  search: string,

  category: any[],
  hasMoreCategories: boolean
) => {
  //   await sleep(500);

  let filteredOptions;
  if (!search) {
    filteredOptions = category?.map((data) => {
      return {
        label: data.name,
        value: data.id,
      };
    });
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = category.filter(({ name }) =>
      name.toLowerCase().includes(searchLower)
    );
  }

  const hasMore = hasMoreCategories;
  const slicedOptions = filteredOptions;

  return {
    options: slicedOptions,
    hasMore,
  };
};
export const loadMainactegoryOptions = async (
  search: string,

  subCategory: any[],
  hasMore:boolean
) => {
  //   await sleep(500);

  let filteredOptions;
  if (!search) {
    filteredOptions = subCategory?.map((data) => {
      return {
        label: data.name,
        value: data.id,
      };
    });
  } else {
    const searchLower = search.toLowerCase();

    filteredOptions = subCategory.filter(({ subCategoryName }) =>
      subCategoryName.toLowerCase().includes(searchLower)
    );
  }


  const slicedOptions = filteredOptions

  return {
    options: slicedOptions,
    hasMore,
  };
};
