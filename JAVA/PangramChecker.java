import java.util.HashSet;

public class PangramChecker {
  public static void main(String[] args) {
    String sentence = "The quick brown fox jumps over the lazy dog"; // Change this to your input sentence
    boolean isPangram = isPangram(sentence);

    if (isPangram) {
      System.out.println("The sentence is a pangram.");
    } else {
      System.out.println("The sentence is not a pangram.");
    }
  }

  public static boolean isPangram(String sentence) {
    // Convert the input sentence to lowercase to handle both upper and lower case
    // letters
    sentence = sentence.toLowerCase();

    // Create a set to store the unique characters in the sentence
    HashSet<Character> uniqueChars = new HashSet<>();

    // Iterate through the sentence and add all alphabets to the set
    for (char c : sentence.toCharArray()) {
      if (Character.isAlphabetic(c)) {
        uniqueChars.add(c);
      }
    }

    // Check if the set size is 26 (the number of alphabets in the English language)
    return uniqueChars.size() == 26;
  }
}
