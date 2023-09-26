export function toCamelCase(inputString) {
    const words = inputString
      .replace(/\s+/g, '')
      .split(/[\s-]+/);
  
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
  
    return words.join('');
  }

  export function formatCategoryIfSnakeCase(category) {
    if (category.includes('_')) {
      return category
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '); 
    } else {
      return category;
    }
  }
  