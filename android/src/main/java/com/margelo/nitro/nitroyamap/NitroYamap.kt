package com.margelo.nitro.nitroyamap
  
import com.facebook.proguard.annotations.DoNotStrip

@DoNotStrip
class NitroYamap : HybridNitroYamapSpec() {
  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }
}
