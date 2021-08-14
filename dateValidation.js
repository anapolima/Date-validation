function validateDate (_date)
{
  const date = _date.trim();
  const regex = /\d{2}\/\d{2}\/\d{4}$/;

  if (regex.test(date))
  {
    function checkDateValue (_date)
    {
        const date = _date.split("/");

        const day = date[0];
        const month = date[1];
        const year = date[2];

        switch (month)
        {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (day > 31 || day < 1)
                {
                    return false;
                }
            break;

            case 4:
            case 6:
            case 9:
            case 11:
                if (day > 30 || day < 1)
                {
                    return false;
                }
            break;

            case 2:
                if( ( year % 4 == 0 && year % 100 != 0 ) || ( year % 400 == 0)  )
                {
                    if (day > 29 || day < 1)
                    {
                        return false;
                    }
                }
                else
                {
                    if (day > 28 || day < 1)
                    {
                        return false;
                    }
                }
            break;

            default:
                return false;
        }
    }

    if (checkDateValue(date))
    {
        return true;
    }
    else
    {
        throw new Error("Invalid date")
    }
  }
  else
  {
    throw new Error("The date string must be on the format DD/MM/YYYY")
  }
}