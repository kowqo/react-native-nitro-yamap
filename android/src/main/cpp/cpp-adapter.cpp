#include <jni.h>
#include "nitroyamapOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitroyamap::initialize(vm);
}
