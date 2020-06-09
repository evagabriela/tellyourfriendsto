
class Tell
  def initialize(text)
    @text = text
  end

  def to_html
    css = ('tell ' + hashtags.map { |h| h.downcase }.join(' ')).strip
    tell_html = augment(text_without_hashtags)
    "<div class='#{css}'>
      <p>#{tell_html}</p>
      <span class='hashtag'>
        #{hashtag_html}
      </span>
    </div>
    "
  end

  def persist
    filename = text_without_hashtags.split(" ")[0..4].join("_").gsub(/\W/, '').downcase + ".html"
    File.open("src/html_snippets/" + filename, "w") { |f| f.write self.to_html }
  end

  private
  def text_without_hashtags
    @text.split(" ").reject { |word| word.start_with?("#") }.join(" ").chomp
  end

  # returns the hashtags parsed from the text without '#'
  def hashtags
    @text.split(" ").select { |word| word.start_with?("#") }.map { |word| word.gsub('#', '') }
  end

  def hashtag_html
    hashtags.map do |hashtag|
      "<a href='##{hashtag.downcase}'>##{hashtag}</a>"
    end.join("\n")
  end

  def augment(content)
    content.split(" ").map do |word|
      if word.include?("http")
        if word.include?("youtube.com")
          "<iframe width='560' height='315' src='#{word}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
        else
          "<a target='_blank' href='#{word}'>#{word}</a>"
        end
      else
        word
      end
    end.join(" ")
  end
end

def load_tells
  # make it use relative path of arg?
  @raw_text = File.read("src/scripts/tells.txt")
end

def extract_tells
  @tells = @raw_text.split("\n\n").reject { |t| t.strip.empty? }.map { |t| Tell.new(t) }
end

def generate_html
  puts @tells.map { |t| t.to_html }.join
end

load_tells
extract_tells
generate_html
@tells.each { |t| t.persist }
