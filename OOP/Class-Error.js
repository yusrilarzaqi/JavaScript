class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    
    if (numbers.length === 0) {
      throw new ValidationError('Total parameter harus lebih dari 0', 'numbers');
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum());
  console.info('Pesan ini tidak akan ditampilkan');
}catch (e) {
  if (e instanceof ValidationError) {
    console.error(`Terjadi error di field ${e.field} dengan error ${e.message}`);
  }else {
    console.error(`Terjadi Error : ${e.message}`);
  }
} finally {
  console.info("Kode Program Tidak akan berhenti");
}

console.info('Diluar dari blok try catch finally');
 
