module Jekyll
  module ReplaceRegexp
    def replace_regexp(input, reg_str, repl_str)
      re = Regexp.new reg_str

      input.gsub re, repl_str
    end
  end
end

Liquid::Template.register_filter(Jekyll::ReplaceRegexp)
