using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ABetterJQuery.Pages
{
  public class ContactModel : PageModel
  {
    private readonly ILogger<ContactModel> _logger;

    public ContactModel(ILogger<ContactModel> logger)
    {
      _logger = logger;
    }
    public void OnPost()
    {
      _logger.LogInformation($"Sending Contact Page Message");
    }
  }
}
