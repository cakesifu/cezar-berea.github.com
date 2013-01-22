def each_file(pattern, &block)
  dir = File.dirname(__FILE__)
  Dir.glob "#{dir}#{pattern}", &block
end

task :build_haml do
  each_file "/_layouts/*.haml" do |haml_file|
    system %(haml #{haml_file} #{haml_file.gsub(/.haml$/, '.html')})
  end
end

task :build_sass do
  each_file "/stylesheets/styles.sass" do |sass_file|
    system %(sass #{sass_file} #{sass_file.gsub(/.sass$/, '.css')})
  end
end

task build: [:build_haml, :build_sass] do
  system %(jekyll --pygments --no-lsi --safe)
end

task serve: [:build_haml, :build_sass] do
  system %(jekyll --pygments --no-lsi --safe --server)
end
