import useGoogleSheets from 'use-google-sheets';


const GoogleSheets = () => {
  REACT_APP_GOOGLE_API_KEY='AIzaSyChIHqUkiNjFKAgnoBYEWYz04UoSFnTHtw';
  constREACT_APP_SHEET_ID='1RimXeXxItN-lCw-NTtGfyT0Y7fGVGU2a4ed8tEBH050';

  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_SHEET_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default GoogleSheets;

// sourced from https://github.com/gglukmann/use-google-sheets 
