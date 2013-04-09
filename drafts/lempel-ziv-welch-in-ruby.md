# Lempel-Ziv-Welch in Ruby

While going through old snippets, I found a quick implementation of the LZW lossless compression algorithm I needed to confirm my solutions for an exercise in college.

I decided to revisit the subject and expand 

## How LZW works



## Writing the tests

As always, it is best to begin by writing tests.



    dictionary = { "a" => 0, "b" => 1, "c" => 2, "d" => 3, "e" => 4 }

    # encode = 'deabdebdcd'
    encode = 'acadeadeacab'
    encoded = ''

    buffer = ''

    encode.each_char do |char|
      if dictionary.has_key?(buffer + char)
        # skip and continue with extended buffer
        buffer += char
      else
        # add combination of buffer and read character to dictionary, value is next
        # highest value not yet in values
        dictionary[buffer + char] = dictionary.values.sort.last + 1
        encoded << dictionary[buffer].to_s
        buffer = char
      end
    end

    encoded << dictionary[buffer].to_s

    puts "\"#{encode}\" encoded: #{encoded}"
