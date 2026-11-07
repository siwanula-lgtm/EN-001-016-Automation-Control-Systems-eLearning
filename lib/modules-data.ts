export interface ModuleData {
  id: string;
  week: string;
  titleTh: string;
  titleEn: string;
  description: string;
  clo: string;
  hoursT: number;
  hoursP: number;
  topics: string[];
  labTitle: string;
  labCount: number;
  reviewSheet: string;
  icon: string;
  color: string;
}

// 10 หน่วยเรียน ตามเอกสารประกอบการสอน EN-001-016 ฉบับสมบูรณ์ R1 (สัปดาห์ ชั่วโมง ท/ป CLO ตามหัวแผนการจัดการเรียนรู้ หัวข้อ)
export const modules: ModuleData[] = [
  {
    id: "01",
    week: "1",
    titleTh: "บทนำระบบควบคุมอัตโนมัติและ PLC",
    titleEn: "Introduction to Automation Control Systems and PLC",
    description:
      "ระบบควบคุมอัตโนมัติประกอบด้วยตัวตรวจจับ (เซ็นเซอร์/ทรานสดิวเซอร์) ตัวควบคุม ตัวขับ (Actuator) และกระบวนการที่ถูกควบคุม ซึ่งอาจเป็นแบบวงเปิดหรือวงปิดที่มีการป้อนกลับ ตัวควบคุมอาจเป็นแบบแอนะล็อกหรือแบบดิจิทัล …",
    clo: "CLO2",
    hoursT: 2,
    hoursP: 2,
    topics: ["1.1 ระบบควบคุมอัตโนมัติ (Automation Control Systems)", "1.2 เซ็นเซอร์และทรานสดิวเซอร์ (Sensors and Transducers)", "1.3 ตัวควบคุมแบบแอนะล็อกและแบบดิจิทัล", "1.4 ความหมายและความสำคัญของ PLC", "1.5 โครงสร้างพื้นฐานและสถาปัตยกรรมของ PLC", "1.6 ชนิดของ PLC", "1.7 การเชื่อมต่ออินพุต/เอาต์พุตเบื้องต้น ภาษาโปรแกรม และซอฟต์แวร์"],
    labTitle: "การสร้างโปรเจกต์ GX Works3 และควบคุมไฟแสดงสถานะแบบ START/STOP ด้วยวงจร Self-holding บน PLC FX5U",
    labCount: 1,
    reviewSheet: "review_sheet_01.html",
    icon: "Cpu",
    color: "slate",
  },
  {
    id: "02",
    week: "2",
    titleTh: "พื้นฐานดิจิทัลและหลักการตรรกะ",
    titleEn: "Digital Fundamentals and Logic Principles",
    description:
      "PLC เป็นตัวควบคุมดิจิทัลที่ประมวลผลข้อมูลสองสถานะ คือ 0 (OFF) และ 1 (ON) ผู้ปฏิบัติงานจึงต้องเข้าใจระบบเลขฐานสอง ฐานแปด และฐานสิบหก เนื่องจากหมายเลขอุปกรณ์ X/Y ของ FX5U เป็นเลขฐานแปดและข้อมูลในรีจิสเตอร์เป็นเลขฐานสอง 16 บิต …",
    clo: "CLO2, CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["2.1 ระบบเลขและการแปลงเลขฐาน", "2.2 ลอจิกเกตและตารางความจริง", "2.3 พีชคณิตบูลีน ทฤษฎีบทของเดอมอร์แกน และการลดรูป", "2.4 การแปลงตรรกะเป็นแผนภาพ Ladder", "2.5 ตรรกะที่มีหน่วยความจำ: Self-holding, SET/RST และ Interlock", "2.6 อินพุต/เอาต์พุตดิจิทัลของ FX5U"],
    labTitle: "การสร้างลอจิกเกต AND, OR, XOR และวงจรโหวต 2 ใน 3 ด้วย Ladder บน PLC FX5U และตรวจสอบกับตารางความจริง",
    labCount: 1,
    reviewSheet: "review_sheet_02.html",
    icon: "Binary",
    color: "blue",
  },
  {
    id: "03",
    week: "3",
    titleTh: "คำสั่งพื้นฐานของ PLC",
    titleEn: "Basic PLC Instructions",
    description:
      "คำสั่งพื้นฐานของ PLC คือชุดคำสั่งที่ใช้แปลงตรรกะควบคุมเป็นโปรแกรม Ladder และรายการคำสั่ง (Instruction List) ได้แก่ LD, LDI, AND, ANI, OR, ORI, OUT สำหรับเงื่อนไขและเอาต์พุต ANB, ORB, INV และ MPS/MRD/MPP สำหรับจัดการบล็อกและสาขา …",
    clo: "CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["3.1 ภาษา Ladder อุปกรณ์ และการประมวลผลโปรแกรม", "3.2 คำสั่ง LD, LDI, AND, ANI, OR, ORI และ OUT", "3.3 คำสั่งรวมบล็อกและแยกสาขา: ANB, ORB, INV, MPS/MRD/MPP", "3.4 คำสั่ง SET, RST และ ZRST", "3.5 คำสั่งตรวจจับขอบสัญญาณ PLS และ PLF", "3.6 Self-holding, Interlock, Toggle และ Double coil"],
    labTitle: "การเขียนโปรแกรมเดินหน้า–ถอยหลังด้วย Self-holding และ Interlock และวงจรสลับสถานะ/SET/ZRST บน PLC FX5U",
    labCount: 1,
    reviewSheet: "review_sheet_03.html",
    icon: "Code",
    color: "green",
  },
  {
    id: "04",
    week: "4",
    titleTh: "การเขียนโปรแกรมควบคุมแบบลำดับ",
    titleEn: "Sequential Control Programming",
    description:
      "การควบคุมแบบลำดับคือการควบคุมที่ผลลัพธ์ขึ้นกับทั้งสถานะของอินพุตปัจจุบันและ \"ขั้นตอน\" ที่ระบบอยู่ ณ ขณะนั้น ผู้ออกแบบเริ่มจากเขียนแผนภาพลำดับ กำหนดรีเลย์ขั้น (Step relay) M0 เป็นขั้นเริ่มต้น และ M1, M2, ... แทนแต่ละขั้น …",
    clo: "CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["4.1 แนวคิดการควบคุมแบบลำดับ", "4.2 แผนภาพลำดับและ SFC", "4.3 การเขียนโปรแกรมแบบ Step relay ด้วย SET/RST", "4.4 วิธีทางเลือกและข้อผิดพลาดที่พบบ่อย", "4.5 การหยุดฉุกเฉิน การรีเซ็ต โหมด และการทำงานต่อเนื่อง", "4.6 การสตาร์ตมอเตอร์ตามลำดับและขั้นตอนการออกแบบ"],
    labTitle: "การเขียนโปรแกรมควบคุมกระบอกสูบ 2 ตัว A+ B+ A- B- ด้วย Step relay และวงจรหยุดฉุกเฉิน",
    labCount: 1,
    reviewSheet: "review_sheet_04.html",
    icon: "ListOrdered",
    color: "yellow",
  },
  {
    id: "05",
    week: "5",
    titleTh: "การใช้ไทเมอร์และเคาน์เตอร์",
    titleEn: "Timers and Counters",
    description:
      "ไทเมอร์ใช้หน่วงเวลาการทำงานของเอาต์พุต โดยเมื่อคอยล์ไทเมอร์ได้รับเงื่อนไข ตัวไทเมอร์จะนับเวลาตามค่าตั้ง K และเมื่อครบเวลาหน้าสัมผัสของไทเมอร์จึงทำงาน และจะรีเซ็ตเมื่อเงื่อนไขหายไป ประยุกต์เป็นวงจรหน่วงเวลาทำงาน หน่วงเวลาหยุด …",
    clo: "CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["5.1 ไทเมอร์ (Timer) และหน่วยเวลา", "5.2 วงจรหน่วงเวลาทำงานและหน่วงเวลาหยุด", "5.3 วงจรกะพริบและไฟสัญญาณจราจร", "5.4 เคาน์เตอร์ (Counter)", "5.5 การใช้ไทเมอร์ร่วมกับเคาน์เตอร์"],
    labTitle: "การทดลองไทเมอร์ วงจรกะพริบ และเคาน์เตอร์ด้วย GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_05.html",
    icon: "Timer",
    color: "red",
  },
  {
    id: "06",
    week: "6–7",
    titleTh: "ระบบอินพุต/เอาต์พุตและการเชื่อมต่อ PLC กับอุปกรณ์ภายนอก",
    titleEn: "I/O Systems and External Interfacing",
    description:
      "ระบบอินพุต/เอาต์พุตเป็นส่วนเชื่อมต่อระหว่าง CPU ของ PLC กับอุปกรณ์สนาม การเลือกอุปกรณ์อินพุตและชนิดเซนเซอร์ NPN/PNP ต้องสอดคล้องกับการต่อขั้ว S/S ของอินพุต การเลือกเอาต์พุตแบบรีเลย์หรือทรานซิสเตอร์ขึ้นกับชนิดและขนาดของโหลด …",
    clo: "CLO2, CLO3",
    hoursT: 4,
    hoursP: 4,
    topics: ["6.1 โครงสร้างระบบอินพุต/เอาต์พุต", "6.2 อุปกรณ์อินพุตและการเลือกเซนเซอร์", "6.3 เซนเซอร์ NPN/PNP และการต่ออินพุต", "6.4 เอาต์พุตและการต่อโหลด", "6.5 วงจรควบคุมมอเตอร์ Fail-safe และปุ่มหยุดฉุกเฉิน", "6.6 การนับด้วยเซนเซอร์ รายการ I/O และการตรวจสอบข้อผิดพลาด"],
    labTitle: "การทดลองเชื่อมต่อเซนเซอร์และโหลดกับ PLC ด้วย GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_06.html",
    icon: "Cable",
    color: "purple",
  },
  {
    id: "07",
    week: "9",
    titleTh: "การสื่อสารข้อมูลและเครือข่ายของ PLC",
    titleEn: "PLC Communication and Networks",
    description:
      "การสื่อสารทำให้ PLC แลกเปลี่ยนข้อมูลกับพีซี HMI อินเวอร์เตอร์ และ PLC เครื่องอื่นได้ โดยต้องกำหนดมาตรฐานทางกายภาพ พารามิเตอร์ (เช่น IP address) และโปรโตคอลให้ตรงกันทั้งสองฝั่ง …",
    clo: "CLO2",
    hoursT: 2,
    hoursP: 2,
    topics: ["7.1 หลักการสื่อสารข้อมูลและมาตรฐานสัญญาณ", "7.2 เครือข่าย PLC และอีเทอร์เน็ต", "7.3 โปรโตคอล Modbus และ Master-Slave", "7.4 การแลกเปลี่ยนข้อมูลด้วยรีจิสเตอร์", "7.5 การตรวจสอบข้อผิดพลาดของการสื่อสาร"],
    labTitle: "การทดลองออกแบบแผนที่ข้อมูลและแลกเปลี่ยนข้อมูลด้วยรีจิสเตอร์ใน GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_07.html",
    icon: "Network",
    color: "teal",
  },
  {
    id: "08",
    week: "10",
    titleTh: "การประยุกต์ใช้ PLC ในงานควบคุมอัตโนมัติ",
    titleEn: "PLC Applications in Automation Control",
    description:
      "การประยุกต์ใช้ PLC ควรเริ่มจากการกำหนดกระบวนการ จัดทำรายการ I/O เขียนผังการทำงานและผังเวลา เขียนโปรแกรม จำลองและทดสอบกับเครื่องจริง ตัวอย่างงาน เช่น ควบคุมระดับน้ำ ประตูอัตโนมัติ และไฟบันได ใช้หลักการ Self-holding ไทเมอร์ …",
    clo: "CLO3",
    hoursT: 2,
    hoursP: 2,
    topics: ["8.1 ขั้นตอนการออกแบบระบบควบคุมด้วย PLC", "8.2 ระบบควบคุมระดับน้ำในถัง", "8.3 การป้องกันความผิดปกติ", "8.4 ประตูอัตโนมัติ", "8.5 ไฟบันไดอัตโนมัติ", "8.6 การทดสอบเดินเครื่องและเอกสารส่งมอบ"],
    labTitle: "การทดลองควบคุมระดับน้ำในถังพร้อมสัญญาณเตือนด้วย GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_08.html",
    icon: "Factory",
    color: "indigo",
  },
  {
    id: "09",
    week: "11–12",
    titleTh: "การติดตั้งและการบำรุงรักษาระบบ PLC",
    titleEn: "PLC Installation and Maintenance",
    description:
      "การติดตั้ง PLC ที่ดีต้องคำนึงถึงสภาพแวดล้อม การจัดวางในตู้ การเดินสายและแยกวงจรกำลังกับสัญญาณ การป้องกันด้วยเบรกเกอร์/ฟิวส์ และการลดสัญญาณรบกวน การบำรุงรักษาเชิงป้องกันตามตารางเวลาและการวินิจฉัยจากไฟแสดงสถานะและ GX Works3 …",
    clo: "CLO4",
    hoursT: 4,
    hoursP: 4,
    topics: ["9.1 สภาพแวดล้อมและข้อกำหนดการติดตั้ง", "9.2 การจัดวางตู้ควบคุมและการเดินสาย", "9.3 แหล่งจ่ายไฟ การป้องกัน และ Noise", "9.4 การบำรุงรักษาเชิงป้องกัน", "9.5 การวินิจฉัยข้อผิดพลาดและการสำรองโปรแกรม", "9.6 โปรแกรมแจ้งเตือนความผิดปกติและกำหนดการบำรุงรักษา"],
    labTitle: "การทดลองโปรแกรมแจ้งเตือนความผิดปกติและกำหนดรอบบำรุงรักษาด้วย GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_09.html",
    icon: "Wrench",
    color: "orange",
  },
  {
    id: "10",
    week: "13–16",
    titleTh: "ระบบสายพานลำเลียงและบรรจุภัณฑ์ พร้อมทบทวนและสรุปรายวิชา",
    titleEn: "Conveyor and Packaging System with Course Review",
    description:
      "ระบบสายพานลำเลียงและบรรจุภัณฑ์รวมความรู้เรื่องลอจิก ไทเมอร์ เคาน์เตอร์ การควบคุมแบบลำดับ และการเชื่อมต่อ I/O เข้าด้วยกัน โดยแบ่งกระบวนการเป็นขั้นตอน (สายพานทำงานและนับ → ปิดผนึก → แจ้งเสร็จ) ใช้ SET/RST …",
    clo: "CLO2, CLO3, CLO4",
    hoursT: 8,
    hoursP: 8,
    topics: ["10.1 ระบบสายพานลำเลียงและบรรจุภัณฑ์", "10.2 การแบ่งขั้นตอนและโปรแกรมลำดับ", "10.3 ขั้นตอนปิดผนึกและแจ้งสถานะ", "10.4 การเริ่มและหยุด", "10.5 ทบทวนและสรุปเนื้อหารายวิชา", "10.6 แนวทางเตรียมสอบ"],
    labTitle: "การทดลองระบบสายพานลำเลียงและบรรจุภัณฑ์ด้วย GX Works3 / GX Simulator3",
    labCount: 1,
    reviewSheet: "review_sheet_10.html",
    icon: "Container",
    color: "rose",
  },
];

export function getModuleById(id: string): ModuleData | undefined {
  return modules.find((m) => m.id === id);
}

export const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  slate: { bg: "bg-slate-100 dark:bg-slate-800/40", text: "text-slate-700 dark:text-slate-300", border: "border-slate-200 dark:border-slate-700", accent: "from-slate-500 to-gray-500" },
  blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", accent: "from-blue-500 to-cyan-500" },
  green: { bg: "bg-green-50 dark:bg-green-900/20", text: "text-green-700 dark:text-green-300", border: "border-green-200 dark:border-green-800", accent: "from-green-500 to-emerald-500" },
  yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-700 dark:text-yellow-300", border: "border-yellow-200 dark:border-yellow-800", accent: "from-yellow-500 to-orange-500" },
  red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-700 dark:text-red-300", border: "border-red-200 dark:border-red-800", accent: "from-red-500 to-pink-500" },
  purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-700 dark:text-purple-300", border: "border-purple-200 dark:border-purple-800", accent: "from-purple-500 to-violet-500" },
  teal: { bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", accent: "from-teal-500 to-cyan-500" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-700 dark:text-indigo-300", border: "border-indigo-200 dark:border-indigo-800", accent: "from-indigo-500 to-blue-500" },
  orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800", accent: "from-orange-500 to-amber-500" },
  rose: { bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", accent: "from-rose-500 to-pink-500" },
};
