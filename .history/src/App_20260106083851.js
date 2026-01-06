            <Route exact path="/*" element={<Newhome />} />
            <Route path="/products" element={<Products />} />
            <Route path="/MyComponent" element={<MyComponent />} />
            <Route path="/ReagentComponent" element={<ReagentComponent />} />
            <Route path="/productDetails/:id" exact element={<ProductDetails />} />
            <Route path="/lra" element={<LabReagents />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/admn" element={<TaskManager />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      {cartShow && <CartContainer />}
      {openLogInModal && (
        <SignIn
          onClose={() => setOpenLogInModal(false)}
          open={openLogInModal}
        />
      )}
      <Footer />
    </AnimatePresence>
    // {/* </> */}
  );
};

export default App;
