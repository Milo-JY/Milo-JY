class TankIndivisual {
   String tankName;
   int cannon;
   boolean missile;
   boolean initChk;
   
   void initTank(String tankName, int cannon, boolean missile) {
      this.tankName = tankName;
      this.cannon = cannon;
      this.missile = missile;
      initChk = true;
   }

   void infoTank() {
      if (initChk) {
         System.out.printf("탱크명 : %s, ", tankName);
         System.out.printf("포종류 : %d단계, ", cannon);
         System.out.printf("미사일 %s장착\n", missile ? "" : "미");
      }
   }
   
   void printTankName() {
	   System.out.printf("\n\n< %s 공격 >\n", tankName);
   }
   
   void missileAttack() {
	   if (missile) {
		   System.out.println("미사일 발사 : 초전박살");
	   } else {
		   System.out.println(" ");
	   }
   }
   
   void cannonAttack() {
      if (initChk) {
         String boom = null;
         
         printTankName();
         
         switch (cannon) {
         case 0:
        	boom = " ";
        	break;
         case 1:
            boom = "펑";
            break;
         case 2:
            boom = "펑펑";
            break;
         case 3:
            boom = "콰쾅";
            break;
         }

         System.out.printf("대포발사 : %s\n", boom);
      }
   }
   
   void fireCannon() {
	   if (initChk) {
		   printTankName();
		   cannonAttack();
	   }
   }
   
   void fireMissile() {
	   if (initChk) {
		   printTankName();
		   missileAttack();
	   }
   }
   
   void attack() {
	   if (initChk) {
		   printTankName();
		   cannonAttack();
		   missileAttack();
	   }
   }
   
}


public class ClassQuiz_02_tankIndivisual {
   public static void main(String[] args) {
	   TankIndivisual k1 = new TankIndivisual();
	   TankIndivisual k2 = new TankIndivisual();
	   TankIndivisual k3 = new TankIndivisual();
      
      k1.initTank("K1", 1, false);
      k2.initTank("K2", 2, false);
      k3.initTank("K3", 3, true);
      
      k1.infoTank();
      k2.infoTank();
      k3.infoTank();
      
      k1.attack();
      k2.attack();
      k3.attack();
      
      k1.fireCannon();
      k2.fireCannon();
      k3.fireCannon();
      
      k1.fireMissile();
      k2.fireMissile();
      k3.fireMissile();
   }
}