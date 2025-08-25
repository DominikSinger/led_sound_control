from fastapi import FastAPI
import leds, audio

app = FastAPI()

@app.get("/leds/all_on")
def leds_on():
    leds.all_on()
    return {"status": "ok"}

@app.get("/leds/clear_all")
def leds_off():
    leds.clear_all()
    return {"status": "ok"}
