/***
 * Copyright (C) 2018 Qli5. All Rights Reserved.
 * 
 * @author qli5 <goodlq11[at](163|gmail).com>
 * 
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * 
 * The FLV merge utility is a Javascript translation of 
 * https://github.com/grepmusic/flvmerge
 * by grepmusic
*/

class FLVOffsetStream extends TransformStream {
    constructor({
        offset = 0,
    } = {}) {
        super({
            transform: (chunk, controller) => {

            }
        });
    }

    /**
     * 
     * @param {ReadableStream[]} streams flv ReadableStreams
     */
    static mergeStream(streams) {
        
    }
}