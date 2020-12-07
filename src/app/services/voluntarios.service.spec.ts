/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoluntariosService } from './voluntarios.service';

describe('Service: Voluntarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoluntariosService]
    });
  });

  it('should ...', inject([VoluntariosService], (service: VoluntariosService) => {
    expect(service).toBeTruthy();
  }));
});
