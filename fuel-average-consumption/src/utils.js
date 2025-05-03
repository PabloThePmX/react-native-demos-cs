export async function loadFont() {
    await Font.loadAsync({
        'Electrolize': require('../assets/fonts/Electrolize-Regular.ttf'),
    });
    await SplashScreen.hideAsync(); 
}