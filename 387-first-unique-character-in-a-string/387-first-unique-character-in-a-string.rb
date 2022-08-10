# @param {String} s
# @return {Integer}
def first_uniq_char(s)
    hash = {}    
    split = s.split('')
    
    split.each { |char|
        if hash[char]
            hash[char] += 1
        else
            hash[char] = 1
        end
    }
    
    split.each_with_index { |char, idx|
        return idx if hash[char] == 1 
    }
    
    return -1
end