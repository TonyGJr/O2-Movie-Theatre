import javax.swing.JOptionPane;
//Gunn, Tony
public class PasswordAuth
{
  public static void main(String[] args)
  {
    int pW = 77777;
    String input;
    
    
    input = JOptionPane.showInputDialog("What is your password, master?");
    pW = Integer.parseInt(input);
    
    if (pW == 77777)
       {
         JOptionPane.showMessageDialog(null, "Correct!");
       }
    else
       {
         JOptionPane.showMessageDialog(null, "The password you entered was incorrect. Please try again.");
       }
    
    boolean exitLoop = false;
    while (!exitLoop)
    { 
    	    input = JOptionPane.showInputDialog("What is your password, master?");
    	    pW = Integer.parseInt(input);
    	    
    	    if (pW == 77777)
    	       {
    	         JOptionPane.showMessageDialog(null, "Correct!");
    	         while (!exitLoop);
    	       }
    	    else
    	       {
    	         JOptionPane.showMessageDialog(null, "The password you entered was incorrect. Please try again.");
    	       }
    }
    System.exit(0);
                
  }
}