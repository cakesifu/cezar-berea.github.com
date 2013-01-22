def each_file(pattern, &block)
  dir = File.dirname(__FILE__)
  Dir.glob "#{dir}#{pattern}", &block
end

task :build_haml do
  puts "---[ Building HAML ] ------------------------------------------------------------"
  each_file "/_layouts/*.haml" do |haml_file|
    puts "   buid: #{haml_file}"
    system %(haml --format html5 -q --trace #{haml_file} #{haml_file.gsub(/.haml$/, '.html')})
  end
end

task :build_sass do
  puts "---[ Building SASS ] ------------------------------------------------------------"
  system %(compass compile)
end

task build: [:build_haml, :build_sass] do
  puts "---[ Building Jekyll ] ----------------------------------------------------------"
  system %(jekyll --pygments --no-lsi --safe)
end

task serve: [:build_haml, :build_sass] do
  puts "---[ Building Jekyll ] ----------------------------------------------------------"
  system %(jekyll --pygments --no-lsi --safe --server)
end

task publish: [:build_haml, :build_sass] do
  system %(git add .)
  system %(git commit)
  system %(git push)
end
