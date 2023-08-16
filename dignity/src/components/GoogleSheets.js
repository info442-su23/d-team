import useGoogleSheets from 'use-google-sheets';

const REACT_APP_GOOGLE_API_KEY="AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0";
const REACT_APP_SHEET_ID='1RimXeXxItN-lCw-NTtGfyT0Y7fGVGU2a4ed8tEBH050';

const GoogleSheets = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: REACT_APP_GOOGLE_API_KEY,
    sheetId: REACT_APP_SHEET_ID,
  });

  if (!loading && !error) {
    return data[0].data;
  }

};

export default GoogleSheets;

// sourced from https://github.com/gglukmann/use-google-sheets 
