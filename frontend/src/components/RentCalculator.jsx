import React, { useState, useMemo } from 'react';
import { Calculator, Utensils, Calendar, Shield, Sparkles, Check, Info } from 'lucide-react';

export default function RentCalculator({
  property,
  selectedRoom,
  selectedBed,
  onProceedToBook
}) {
  const baseRent = selectedRoom?.rentPerBed || property?.pricing?.startingPrice || 8000;
  const securityDeposit = property?.pricing?.securityDeposit || baseRent;
  const maintenanceFee = property?.pricing?.maintenanceFee || 1000;

  // Meal Plan selection
  const [selectedMealPlan, setSelectedMealPlan] = useState(
    property?.foodPlans?.[1]?.id || 'none'
  );

  // Tenure selection
  const [durationMonths, setDurationMonths] = useState(6);

  // Optional add-ons
  const [addOns, setAddOns] = useState({
    parking: false,
    laundry: true,
    acUsage: false,
  });

  const ADDON_PRICES = {
    parking: { label: 'Two-Wheeler Parking', price: 400 },
    laundry: { label: 'Unlimited Laundry Service', price: 600 },
    acUsage: { label: 'Pre-estimated AC Units', price: 1000 },
  };

  // Duration discounts
  const tenureDiscountPercent = useMemo(() => {
    if (durationMonths >= 11) return 15;
    if (durationMonths >= 6) return 10;
    if (durationMonths >= 3) return 5;
    return 0;
  }, [durationMonths]);

  // Meal plan cost
  const mealCost = useMemo(() => {
    const plan = property?.foodPlans?.find((p) => p.id === selectedMealPlan);
    return plan ? plan.price : 0;
  }, [selectedMealPlan, property]);

  // Add-ons total
  const addOnsTotal = useMemo(() => {
    return Object.entries(addOns).reduce((acc, [key, isChecked]) => {
      return isChecked ? acc + (ADDON_PRICES[key]?.price || 0) : acc;
    }, 0);
  }, [addOns]);

  // Discount on base rent
  const discountAmount = Math.round((baseRent * tenureDiscountPercent) / 100);
  const effectiveBaseRent = baseRent - discountAmount;

  // Net monthly rent
  const totalMonthlyRent = effectiveBaseRent + mealCost + addOnsTotal;

  // Move-in grand total (First month rent + Security deposit + Maintenance fee)
  const totalMoveInCost = totalMonthlyRent + securityDeposit + maintenanceFee;

  const toggleAddOn = (key) => {
    setAddOns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Dynamic Rent Calculator</h3>
            <p className="text-xs text-slate-500">Transparent monthly breakdown with tenure savings</p>
          </div>
        </div>
        {selectedBed && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            {selectedRoom?.roomNumber} - {selectedBed?.bedNumber}
          </span>
        )}
      </div>

      <div className="space-y-5">
        {/* Step 1: Tenure Selection */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Stay Duration (Months)
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[1, 3, 6, 11].map((months) => (
              <button
                key={months}
                type="button"
                onClick={() => setDurationMonths(months)}
                className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                  durationMonths === months
                    ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <div>{months} Mo{months > 1 ? 's' : ''}</div>
                {months >= 3 && (
                  <span className={`text-[10px] block font-bold ${durationMonths === months ? 'text-amber-200' : 'text-emerald-600'}`}>
                    {months >= 11 ? '15% OFF' : months >= 6 ? '10% OFF' : '5% OFF'}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Meal Plan */}
        {property?.foodPlans && property.foodPlans.length > 0 && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-slate-500" />
              Meal Plan Preference
            </label>
            <div className="space-y-2">
              {property.foodPlans.map((plan) => (
                <label
                  key={plan.id}
                  className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    selectedMealPlan === plan.id
                      ? 'bg-brand-50/60 border-brand-500 text-brand-900'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="mealPlan"
                      checked={selectedMealPlan === plan.id}
                      onChange={() => setSelectedMealPlan(plan.id)}
                      className="text-brand-600 focus:ring-brand-500"
                    />
                    <div>
                      <span className="font-semibold block">{plan.name}</span>
                      <span className="text-[11px] text-slate-500">{plan.description}</span>
                    </div>
                  </div>
                  <span className="font-bold">
                    {plan.price === 0 ? 'Free / Included' : `+₹${plan.price.toLocaleString('en-IN')}/mo`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Add-on Services */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Optional Add-ons
          </label>
          <div className="space-y-2">
            {Object.entries(ADDON_PRICES).map(([key, item]) => (
              <label
                key={key}
                className="flex items-center justify-between p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 cursor-pointer text-xs"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={addOns[key]}
                    onChange={() => toggleAddOn(key)}
                    className="rounded text-brand-600 focus:ring-brand-500"
                  />
                  <span className="font-medium text-slate-700">{item.label}</span>
                </div>
                <span className="text-slate-600 font-semibold">+₹{item.price}/mo</span>
              </label>
            ))}
          </div>
        </div>

        {/* Step 4: Real-time Calculation Summary Box */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 space-y-2 text-xs">
          <div className="flex justify-between text-slate-600">
            <span>Base Room Rent:</span>
            <span>₹{baseRent.toLocaleString('en-IN')}/mo</span>
          </div>

          {discountAmount > 0 && (
            <div className="flex justify-between text-emerald-600 font-medium">
              <span>Tenure Savings ({tenureDiscountPercent}% off):</span>
              <span>-₹{discountAmount.toLocaleString('en-IN')}/mo</span>
            </div>
          )}

          {mealCost > 0 && (
            <div className="flex justify-between text-slate-600">
              <span>Food Subscription:</span>
              <span>+₹{mealCost.toLocaleString('en-IN')}/mo</span>
            </div>
          )}

          {addOnsTotal > 0 && (
            <div className="flex justify-between text-slate-600">
              <span>Add-on Services:</span>
              <span>+₹{addOnsTotal.toLocaleString('en-IN')}/mo</span>
            </div>
          )}

          <div className="pt-2 border-t border-slate-200 flex justify-between font-bold text-sm text-slate-900">
            <span>Net Monthly Rent:</span>
            <span className="text-brand-600">₹{totalMonthlyRent.toLocaleString('en-IN')}/mo</span>
          </div>

          {/* Move-in One-time Charges */}
          <div className="pt-2 border-t border-dashed border-slate-200 space-y-1 text-slate-500">
            <div className="flex justify-between">
              <span>Security Deposit (Refundable):</span>
              <span>₹{securityDeposit.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>Onboarding Maintenance:</span>
              <span>₹{maintenanceFee.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="pt-3 border-t-2 border-slate-300 flex justify-between items-baseline font-extrabold text-slate-900">
            <div>
              <span className="text-sm block">Total Due at Move-in</span>
              <span className="text-[10px] text-slate-500 font-normal">
                (Rent + Refundable Deposit + Maintenance)
              </span>
            </div>
            <span className="text-lg text-emerald-600">
              ₹{totalMoveInCost.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={() => {
            if (onProceedToBook) {
              onProceedToBook({
                baseRent,
                discountAmount,
                totalMonthlyRent,
                securityDeposit,
                maintenanceFee,
                totalMoveInCost,
                durationMonths,
                mealPlan: selectedMealPlan,
                addOns,
              });
            }
          }}
          className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          {selectedBed ? 'Lock This Bed & Book Now' : 'Select a Bed to Reserve'}
        </button>
      </div>
    </div>
  );
}
