import { VerificationCode } from './verification_code';

export class VerificationCodeList {
  private objects: VerificationCode[] = [
    new VerificationCode('alles_hat_ein_ende_nur_die_wurst_hat_zwei'),
    new VerificationCode('jetztWirdWiederInDieHändeGespuckt')
  ];

  CodeExists(insertedCode: string) {
    for (let i = 0; i < this.objects.length; i++) {
      if (this.objects[i].code === insertedCode) {
        return true;
      }
    }
    return false;
  }
}
