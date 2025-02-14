(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const o=document.getElementById("app");o.innerHTML=`
      <header class="bg-white shadow">
        <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-primary">Smarting Goods</div>
          <div class="space-x-6">
            <a href="#services" class="hover:text-secondary">Services</a>
            <a href="#about" class="hover:text-secondary">About</a>
            <a href="#testimonials" class="hover:text-secondary">Testimonials</a>
            <a href="#contact" class="bg-primary text-white px-4 py-2 rounded hover:bg-secondary">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section class="bg-gradient-to-r from-primary to-secondary py-20">
          <div class="container mx-auto px-6 text-center">
            <h1 class="text-5xl font-bold text-white mb-6">Digital Marketing That Drives Results</h1>
            <p class="text-xl text-gray-200 mb-8">We help businesses grow through innovative website design, online marketing, and AI-powered social media automation.</p>
            <div class="space-x-4">
              <a href="#services" class="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100">Our Services</a>
              <a href="#contact" class="border-2 border-white text-white px-8 py-3 rounded font-semibold hover:bg-white hover:text-primary">Get Started</a>
            </div>
          </div>
        </section>

        <section id="services" class="py-20">
          <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16">Our Services</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-primary text-4xl mb-4">🖥️</div>
                <h3 class="text-xl font-bold mb-4">Website Design</h3>
                <p class="text-gray-600">Modern, responsive websites that convert visitors into customers.</p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-primary text-4xl mb-4">📈</div>
                <h3 class="text-xl font-bold mb-4">Online Marketing</h3>
                <p class="text-gray-600">Data-driven strategies to grow your online presence and sales.</p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-primary text-4xl mb-4">🤖</div>
                <h3 class="text-xl font-bold mb-4">AI Social Media Automation</h3>
                <p class="text-gray-600">Smart automation to save time and boost engagement.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" class="bg-gray-50 py-20">
          <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl font-bold mb-6">About Smarting Goods</h2>
                <p class="text-gray-600 mb-4">We're a team of digital marketing experts passionate about helping businesses grow in the digital age. With over 10 years of experience, we've helped hundreds of clients achieve their online goals.</p>
                <p class="text-gray-600 mb-4">Our approach combines creativity with data-driven strategies to deliver measurable results. We stay ahead of the curve by constantly innovating and adopting the latest technologies.</p>
                <a href="#contact" class="bg-primary text-white px-6 py-2 rounded hover:bg-secondary">Learn More</a>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="grid grid-cols-2 gap-4">
                  <div class="text-center p-4">
                    <div class="text-4xl font-bold text-primary">10+</div>
                    <div class="text-gray-600">Years Experience</div>
                  </div>
                  <div class="text-center p-4">
                    <div class="text-4xl font-bold text-primary">500+</div>
                    <div class="text-gray-600">Projects Completed</div>
                  </div>
                  <div class="text-center p-4">
                    <div class="text-4xl font-bold text-primary">95%</div>
                    <div class="text-gray-600">Client Retention</div>
                  </div>
                  <div class="text-center p-4">
                    <div class="text-4xl font-bold text-primary">24/7</div>
                    <div class="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" class="py-20">
          <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-gray-600 mb-4">"Smarting Goods transformed our online presence. Our website traffic increased by 300% in just 3 months!"</div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div class="font-bold">Sarah Johnson</div>
                    <div class="text-sm text-gray-500">CEO, Tech Solutions</div>
                  </div>
                </div>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-gray-600 mb-4">"The AI social media automation has saved us countless hours while improving our engagement rates."</div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div class="font-bold">Michael Brown</div>
                    <div class="text-sm text-gray-500">Marketing Director</div>
                  </div>
                </div>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-lg">
                <div class="text-gray-600 mb-4">"Their team is professional, responsive, and truly understands our business needs."</div>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <div class="font-bold">Emily Davis</div>
                    <div class="text-sm text-gray-500">Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="bg-primary py-20">
          <div class="container mx-auto px-6">
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h2 class="text-3xl font-bold text-center mb-8">Get in Touch</h2>
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700">Name</label>
                    <input type="text" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  </div>
                  <div>
                    <label class="block text-gray-700">Email</label>
                    <input type="email" class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  </div>
                </div>
                <div>
                  <label class="block text-gray-700">Message</label>
                  <textarea class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary" rows="5"></textarea>
                </div>
                <button type="submit" class="w-full bg-primary text-white px-6 py-3 rounded hover:bg-secondary">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div class="text-2xl font-bold mb-4">Smarting Goods</div>
              <p class="text-gray-400">Your partner in digital success. Let's grow your business together.</p>
            </div>
            <div>
              <h3 class="font-bold mb-4">Quick Links</h3>
              <ul class="space-y-2">
                <li><a href="#services" class="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#about" class="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#testimonials" class="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" class="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold mb-4">Contact Info</h3>
              <ul class="text-gray-400 space-y-2">
                <li>123 Digital Street</li>
                <li>New York, NY 10001</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: info@smartinggoods.com</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2023 Smarting Goods. All rights reserved.
          </div>
        </div>
      </footer>
    `;
