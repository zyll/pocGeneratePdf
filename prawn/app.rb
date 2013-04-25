require 'prawn'

lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, nisi eu scelerisque facilisis, urna ligula interdum nulla, hendrerit dignissim elit dui nec justo. Duis erat dolor, mollis vitae tincidunt in, consectetur ut mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pellentesque cursus odio imperdiet iaculis. Nam iaculis sollicitudin semper. Donec vitae tempus elit. Donec ornare fermentum magna, lacinia euismod odio vestibulum sit amet. Integer quis tortor eget est scelerisque commodo. Nulla commodo erat et mi tincidunt at hendrerit urna aliquet. Suspendisse ultrices, enim nec ornare varius, tellus enim vestibulum purus, ut tempus sapien risus a eros. Cras mattis placerat nisi non euismod. Donec urna ante, porttitor quis ornare id, posuere sit amet neque. In libero felis, ultrices non volutpat at, gravida et velit. Cras id lacus justo, gravida tristique purus. Donec ligula augue, gravida eu gravida pharetra, adipiscing id arcu.";

output = "../build/prawn/prawn_#{ARGV[0] || 1}.pdf"

Prawn::Document.generate(output, page_size: [500, 500], page_layout: :portrait) do
  font_families.update("Noto" => {
                         :normal => "../fonts/noto.ttf"
                       })
  image "../img/squid.png", at: [80, 370]
  start_new_page
  font 'Noto', size: 22
  text lorem
end
puts "created #{output} (size: #{File.stat(output).size})"
