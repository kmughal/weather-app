namespace WeatherApp.Controllers
{

    using Microsoft.AspNetCore.Mvc;

    public class WeatherController : Controller
    {
        public IActionResult Index(string city)
        {
            ViewBag.city = city;
            return View("Index",city);
        }
    }
}