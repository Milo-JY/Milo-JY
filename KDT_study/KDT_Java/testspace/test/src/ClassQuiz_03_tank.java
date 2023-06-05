class kTank {
   private String tankName;
   private int cannon;
   private boolean missile;

   public kTank(String tankName, int cannon) {
      this.tankName = tankName;
      this.cannon = cannon;
   }

   public kTank(String tankName, int cannon, boolean missile) {
      this(tankName, cannon);
      this.missile = missile;
   }
   
   public void infoTank() {
	      System.out.printf("탱크명 : %s, ", tankName);
	      System.out.printf("포종류 : %d단계, ", cannon);
	      System.out.printf("미사일 %s장착\n", missile ? "" : "미");
	   }

   private void printTankName() {
      System.out.printf("\n\n< %s 공격 >\n", tankName);
   }

   private void attackCannon() {
      String boom = null;

      switch (cannon) {
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

   private void attackMissile() {
      System.out.println("미사일 발사 : 초전박살");
   }

   public void fireCannon() {
      printTankName();
      attackCannon();
   }

   public void fireMissile() {
      if (missile) {
         printTankName();
         attackMissile();
      }
   }

   public void attack() {
      if (missile) {
         printTankName();
         attackCannon();
         attackMissile();
      }
   }
}

public class ClassQuiz_03_tank {
   public static void main(String[] args) {
      kTank k1 = new kTank("K1", 1);
      kTank k2 = new kTank("K2", 2);
      kTank k3 = new kTank("K3", 3, true);

      k1.infoTank();
      k2.infoTank();
      k3.infoTank();

      k1.fireCannon();
      k2.fireCannon();
      k3.fireCannon();

      k1.fireMissile();
      k2.fireMissile();
      k3.fireMissile();

      k1.attack();
      k2.attack();
      k3.attack();
   }
}