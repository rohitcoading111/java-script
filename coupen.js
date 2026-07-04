const coupons = ["SAVE10", "WELCOME20", "NEW50"];

function applyCoupon(code) {
  if (coupons.includes(code)) {
    console.log("Coupon Applied ✅");
  } else {
    console.log("Invalid Coupon ❌");
  }
}

applyCoupon("SAVE10");
applyCoupon("ABC123");